import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"
import favIco from "../../favicon.ico"

export default class DefaultHeadMeta extends Component {

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    const {
      pkg,
    } = this.context.metadata

    /* eslint-disable react/jsx-key */
    return (
      <div hidden>
        <Helmet
          meta={ [
            // Please keep this generator tag, that can help to make stats
            {
              name: "generator", content: `${
              process.env.PHENOMIC_NAME } ${ process.env.PHENOMIC_VERSION }`,
            },
            { property: "og:site_name", content: pkg.name },
            { name: "twitter:site", content: `@${ pkg.twitter }` },
          ] }
          link={ [
            {
              rel: "icon",
              href: favIco,
            },
            {
              rel: "stylesheet",
              href: "https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,700,700i&subset=latin-ext,vietnamese",
            },
          ] }
          script={ [
            { src: "https://cdn.polyfill.io/v2/polyfill.min.js" },
          ] }
        />

        { /* meta viewport safari/chrome/edge */ }
        <Helmet
          meta={ [ {
            name: "viewport", content: "width=device-width, initial-scale=1",
          } ] }
        />
        <style>{ "@-ms-viewport { width: device-width; }" }</style>
      </div>
    )
  }
}
