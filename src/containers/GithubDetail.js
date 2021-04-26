import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { API } from "../Contants";
import ReactMarkdown from "react-markdown";
import UserRepo from "../components/UserRepo";
import { Spinner } from "reactstrap";

export default function GithubDetail() {
    const { user, repo } = useParams();
    const [readme, setReadme] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchReadMe = useCallback(async () => {
        setLoading(true);
        try {
            const { status, data } = await axios.get(API.GET_README(user, repo));
            status === 200 ? setReadme(data) : setReadme('');
        } catch (e) {
            setReadme('');
        }
        setLoading(false);
    }, [repo, user])

    useEffect(() => {
        fetchReadMe();
    }, [fetchReadMe]);

    return (
        <div>
            <UserRepo username={user} />
            {loading ? (
                <Spinner animation="border" />
            ) : (
                <Fragment>
                    {readme === '' && 'There is no readme file'}
                    {readme !== '' && <ReactMarkdown>{readme}</ReactMarkdown>}
                </Fragment>
            )}
        </div>
    );
}