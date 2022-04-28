import React from "react";
import { useQuery, gql } from "@apollo/client";

const CONTENT = gql`
    query GetContent {
        book {
            pages {
                content,
                tokens {
                    position,
                    value
                }
            }
        }
    }
`;

function ContentPage() {
    const { data, loading, error } = useQuery(CONTENT);
    if (loading) {
        return <div>loading</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return data.book.pages.content.map(({ content, tokens }) => (
        <div key={content}>
            <p>{content}</p>
        </div>
    ));
}

export default ContentPage;