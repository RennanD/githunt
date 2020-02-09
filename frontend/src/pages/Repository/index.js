import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import Container from '../../components/Container';

import { Loading, Owner, IssuesList, Filter, Controllers } from './styles';

function Repository({ match }) {
    const [repository, setRepo] = useState({});
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState('all');
    const [page, setPage] = useState(3);

    useEffect(() => {
        loadRepo();
    }, []);

    useEffect(() => {
        loadRepo();
    }, [state]);

    useEffect(() => {
        loadRepo();
    }, [page]);

    async function loadRepo() {
        const repoName = decodeURIComponent(match.params.repo);
        const [repository, issues] = await Promise.all([
            api.get(`/repos/${repoName}`),
            api.get(`/repos/${repoName}/issues?page=${page}`, {
                params: {
                    state,
                    per_page: 30,
                },
            }),
        ]);

        setRepo(repository.data);
        setIssues(issues.data);
        setLoading(false);
    }

    function prevPage() {
        if (page === 1) {
            return;
        }

        const prev = page - 1;

        setPage(prev);
    }

    function nextPage() {
        if (page === issues.pages) {
            return;
        }

        const next = page + 1;

        setPage(next);
    }

    if (loading) return <Loading>carregando</Loading>;

    return (
        <Container>
            <Owner>
                <Link to="/">Voltar aos repositórios</Link>
                <img
                    src={repository.owner.avatar_url}
                    alt={repository.owner.login}
                />
                <h1> {repository.name} </h1>
                <p> {repository.description} </p>
            </Owner>

            <Filter>
                <li>
                    <button onClick={() => setState('all')}>
                        Todas as issues
                    </button>
                </li>
                <li>
                    <button onClick={() => setState('open')}>
                        Issues em aberto
                    </button>
                </li>
                <li>
                    <button onClick={() => setState('closed')}>
                        Issues fechadas
                    </button>
                </li>
            </Filter>

            <IssuesList>
                {issues.map(issue => (
                    <li key={String(issue.id)}>
                        <img
                            src={issue.user.avatar_url}
                            alt={issue.user.login}
                        />
                        <div>
                            <strong>
                                <a href={issue.html_url}> {issue.title} </a>
                                {issue.labels.map(label => (
                                    <span key={String(label.id)}>
                                        {' '}
                                        {label.name}{' '}
                                    </span>
                                ))}
                            </strong>
                            <p> {issue.user.login} </p>
                        </div>
                    </li>
                ))}
            </IssuesList>

            <Controllers>
                <button disabled={page === 1} onClick={prevPage}>
                    Anterior
                </button>
                <button disabled={page === issues.pages} onClick={nextPage}>
                    Próximo
                </button>
            </Controllers>
        </Container>
    );
}

Repository.propTypes = () => ({
    match: PropTypes.shape({
        params: PropTypes.shape({
            repo: PropTypes.string,
        }),
    }).isRequired,
});

export default Repository;
