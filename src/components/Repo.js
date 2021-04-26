import React, { useCallback, useMemo } from "react";
import { useHistory } from "react-router-dom";
import moment from 'moment';
import './Repo.css';

export default function Repo({ repo }) {
    const history = useHistory();
    const { owner, name, created_at, updated_at, language } = repo;
    const { login: user } = owner;

    const onClick = useCallback(() => {
        history.push(`/github_detail/${user || 'none'}/${name || 'none'}`);
    }, [history, name, user]);

    const [createdAt, updatedAt] = useMemo(() => {
        const created = moment(created_at).format('LT DD-MM-YY');
        const updated = moment(updated_at).format('LT DD-MM-YY');
        return [ created, updated ]
    }, [created_at, updated_at]);

    return (
        <div className="Repo" onClick={onClick}>
            <div className="FirstInfo">
                <div className="RepoName">
                    {name}
                </div>
                <div className="RepoLanguage">
                    {language}
                </div>
            </div>
            <div className="SecondInfo">
                <div className="RepoTime">
                    Created at {createdAt}
                </div>
                <div className="RepoTime">
                    Updated at {updatedAt}
                </div>
            </div>
        </div>
    );
}
