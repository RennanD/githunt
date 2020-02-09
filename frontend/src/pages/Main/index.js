import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import Container from '../../components/Container';

import { Form, SubmitButton, List, Error } from './styles';

export default function Main() {
    const [repositories, setRepositoreies] = useState([]);
    const [newRepo, setNewRepo] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        function loadRepos() {
            const repos = localStorage.getItem('repositories');

            if (repos) setRepositoreies(JSON.parse(repos));
        }

        loadRepos();
    }, []);

    useEffect(() => {
        function setRepo() {
            localStorage.setItem('repositories', JSON.stringify(repositories));
        }

        setRepo();
    }, [repositories]);

    function handleChange(e) {
        setNewRepo(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        setLoading(true);

        try {
            const response = await api.get(`/repos/${newRepo}`);

            const { full_name: name } = response.data;

            const repoExists = repositories.find(repo => repo === name);

            if (repoExists) {
                setLoading(false);
                setError('Repositório duplicado.');

                setTimeout(() => {
                    setError('');
                }, 2000);

                return setNewRepo('');
            }

            setRepositoreies([...repositories, name]);
            setNewRepo('');

            setLoading(false);
        } catch (error) {
            setError('Repositório não encontrado.');
            setNewRepo('');
            setLoading(false);

            setTimeout(() => {
                setError('');
            }, 2000);
        }
    }

    return (
        <Container>
            <h1>
                <FaGithubAlt />
                Repoitórios
            </h1>

            <Form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Adcionar repositório"
                    value={newRepo}
                    onChange={handleChange}
                />
                <SubmitButton loading={loading}>
                    {loading ? (
                        <FaSpinner color="#fff" size={16} />
                    ) : (
                        <FaPlus color="#fff" size={16} />
                    )}
                </SubmitButton>
            </Form>

            {!!error && <Error>{error}</Error>}

            <List>
                {repositories.map(repo => {
                    return (
                        <li key={repo}>
                            <strong> {repo} </strong>
                            <Link
                                to={`/repository/${encodeURIComponent(repo)}`}
                            >
                                {' '}
                                Datalhes{' '}
                            </Link>
                        </li>
                    );
                })}
            </List>
        </Container>
    );
}
