import React from "react";
import "./blog_page.css";

function Blog() {
  return (
    <div>
      <div className="starting">
        <h1>React v17.0 Release Candidate: No New Features</h1>

        <p>August 10, 2020 by Dan Abramov and Rachel Nabors</p>

        <p className="para">
          Today, we are publishing the first Release Candidate for React 17. It
          has been two and a half years since the previous major release of
          React, which is a long time even by our standards! In this blog post,
          we will describe the role of this major release, what changes you can
          expect in it, and how you can try this release.
        </p>
        <div className="articles">
          <h2>No New Features</h2>
          <p>
            The React 17 release is unusual because it doesn’t add any new
            developer-facing features. Instead, this release is primarily
            focused on making it easier to upgrade React itself.
          </p>
          <p>
            We’re actively working on the new React features, but they’re not a
            part of this release. The React 17 release is a key part of our
            strategy to roll them out without leaving anyone behind
          </p>

          <h2>General Updates</h2>
          <p>
            For the past seven years, React upgrades have been “all-or-nothing”.
            Either you stay on an old version, or you upgrade your whole app to
            a new version. There was no in-between.
          </p>
          <p>
            This has worked out so far, but we are running into the limits of
            the “all-or-nothing” upgrade strategy. Some API changes, for
            example, deprecating the legacy context API, are impossible to do in
            an automated way. Even though most apps written today don’t ever use
            them, we still support them in React. We have to choose between
            supporting them in React indefinitely or leaving some apps behind on
            an old version of React. Both of these options aren’t great.
          </p>
        </div>
      </div>

      <div className="sideBar">
        <div className="layer">hello</div>
      </div>
    </div>
  );
}

export default Blog;
