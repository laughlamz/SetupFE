import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { API } from "../Contants";
import ListRepo from "../components/ListRepo";
import UserRepo from "../components/UserRepo";
import { Spinner } from "reactstrap";

export default function GithubList() {
    const { user } = useParams();
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchListRepo = useCallback(async () => {
        setLoading(true);
        try {
            const { status, data } = await axios.get(API.LIST_REPO(user));
            status === 200 ? setRepos(data) : setRepos([]);
        } catch (e) {
            setRepos([]);
        }
        setLoading(false);
    }, [user, setRepos])

    useEffect(() => {
        fetchListRepo();
    }, [fetchListRepo]);

    return (
        <div className="GithubList">
            <UserRepo username={user} />
            {loading ? (
                <Spinner animation="border" />
            ) : (
                <ListRepo repos={repos} />
            )}
        </div>
    );
}