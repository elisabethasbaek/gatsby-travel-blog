import React from "react";
import Layout from "../components/layout.js";
import "./index.scss";
import { graphql, Link } from "gatsby";

export default function Home({data}) {
    return (
        <Layout>
            <main className="articles">
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <article className="oneArticle">
                        <img src={node.frontmatter.image} alt={"image for article of the name " + node.title} className="oneArticle__image oneArticle__image--one" />
                        <img src={node.frontmatter.image} alt={"image for article of the name " + node.title} className="oneArticle__image oneArticle__image--two" />
                        <img src={node.frontmatter.image} alt={"image for article of the name " + node.title} className="oneArticle__image oneArticle__image--three" />
                        <div className="oneArticle__text">
                            <p className="date">{node.frontmatter.date}</p>
                            <h1 className="heading">
                                <Link to={node.fields.slug} className="heading__link">{node.frontmatter.title}</Link>
                            </h1>
                        </div>
                    </article>
                ))}
            </main>
        </Layout>
    )
};

export const query = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    id
                    frontmatter {
                        date
                        image
                        quote
                        title
                        secondimage
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`
