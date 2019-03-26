import Layout from "../components/layout";
import React from "react";
import SEO from "../components/seo";
import { css } from "glamor";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div {...css({
        color: "#2EEC96",
        font: "7vmin 'Fira Mono', monospaced",
        marginTop: "50px",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0,
        display: "flex",
        flexFlow: "column",
        alignItems: "center",            justifyContent: "center",
        })}
      >
      <p>NOT FOUND HERE.</p>
      <p>Try another path...</p>
    </div>
  </Layout>
)

export default NotFoundPage;