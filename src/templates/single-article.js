import React from "react";
import Layout from "../components/layout.js";
import "./single-article.scss";
import { graphql, Link } from "gatsby";

export default function Home({data}) {
    const post = data.markdownRemark.frontmatter;
    const content = data.markdownRemark.html;
    console.log()

    return (
        <Layout>
            <main className="singleArticle">
                <section className="singleArticle__left">
                    <img alt={post.title} src={post.image} className="left__image" />
                    <h1 className="left__heading">{post.title}</h1>
                </section>

                <article className="singleArticle__right">
                    <h2 className="right__subheading">{post.quote}</h2>
                    <img alt="" src={post.secondimage} className="right__image" />
                    <article className="right__text" dangerouslySetInnerHTML={{ __html: content }}></article>
                    <Link to="/" className="right__backLink">Back to frontpage</Link>
                </article>
            </main>
        </Layout>
    )
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        date
        image
        quote
        title
        secondimage
      }
      html
    }
  }
`
