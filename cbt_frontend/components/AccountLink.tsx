// APP COMPONENT
// Upon rendering of App component, make a request to create and
// obtain a link token to be used in the Link component

import React, { useEffect, useState } from 'react';
import { usePlaidLink } from 'react-plaid-link';
import { useRouter } from 'next/router';

const baseUrl = "http://localhost:8000";

export const getTransactions = async () => {
  const endpoint = '/api/transactions';
  const response = await fetch(`${baseUrl}${endpoint}`, {
    method: "GET",
  });
  const data = await response.json();
  return data;
};

const AccountLink = () => {
  const endpoint = '/api/create_link_token';
  const [linkToken, setLinkToken] = useState(null);
  const generateToken = async () => {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: 'POST',
    });
    const data = await response.json();
    setLinkToken(data.link_token);
  };
  useEffect(() => {
    generateToken();
  }, []);
  return linkToken != null ? <Link linkToken={linkToken} /> : <></>;
};
// LINK COMPONENT
// Use Plaid Link and pass link token and onSuccess function
// in configuration to initialize Plaid Link
interface LinkProps {
  linkToken: string | null;
}
const Link: React.FC<LinkProps> = (props: LinkProps) => {
  const router = useRouter();
  const endpoint = '/api/set_access_token'
  const onSuccess = React.useCallback((public_token, metadata) => {
    // send public_token to server
    const response = fetch(`${baseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ public_token }),
    });
    getTransactions();
    router.push("/summary");
  }, []);
  const config: Parameters<typeof usePlaidLink>[0] = {
    token: props.linkToken!,
    onSuccess,
  };
  const { open, ready } = usePlaidLink(config);
  return (
    <button onClick={() => open()} disabled={!ready}>
      Link account
    </button>
  );
};
export default AccountLink;