import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { Input, InputGroup, InputGroupText } from "reactstrap";
import './SearchBar.css';

export default function SearchBar() {
  const history = useHistory();
  const [user, setUser] = useState('');

  const onChange = useCallback((event) => {
    const { value } = event.target;
    setUser(value);
  }, [setUser]);

  const onSubmit = useCallback(() => {
    history.push(`/github_list/${user || 'none'}`);
    setUser('');
  }, [history, user]);

  return (
    <div className="SearchBar">
      <form onSubmit={onSubmit}>
        <InputGroup onSubmit={onSubmit}>
          <InputGroupText>Get repo</InputGroupText>
          <Input type="text" placeholder="Gituser" value={user} onChange={onChange} />
        </InputGroup>
      </form>
    </div>
  );
}