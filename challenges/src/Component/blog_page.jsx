import React, { Component } from "react";
import "./blog_page.css";

class Blog extends Component {
  render() {
    return (
      <div>
        <div className="starting">
          <h1>React v17.0 Release Candidate: No New Features</h1>

          <p>August 10, 2020 by Dan Abramov and Rachel Nabors</p>

          <p className="para">
            Today, we are publishing the first Release Candidate for React 17.
            It has been two and a half years since the previous major release of
            React, which is a long time even by our standards! In this blog
            post, we will describe the role of this major release, what changes
            you can expect in it, and how you can try this release.
          </p>
          <div className="articles">
            <h2>No New Features</h2>
            <p>
              The React 17 release is unusual because it doesn’t add any new
              developer-facing features. Instead, this release is primarily
              focused on making it easier to upgrade React itself.
            </p>
            <p>
              We’re actively working on the new React features, but they’re not
              a part of this release. The React 17 release is a key part of our
              strategy to roll them out without leaving anyone behind
            </p>

            <h2>General Updates</h2>
            <p>
              For the past seven years, React upgrades have been
              “all-or-nothing”. Either you stay on an old version, or you
              upgrade your whole app to a new version. There was no in-between.
            </p>
            <p>
              This has worked out so far, but we are running into the limits of
              the “all-or-nothing” upgrade strategy. Some API changes, for
              example, deprecating the legacy context API, are impossible to do
              in an automated way. Even though most apps written today don’t
              ever use them, we still support them in React. We have to choose
              between supporting them in React indefinitely or leaving some apps
              behind on an old version of React. Both of these options aren’t
              great.
            </p>
          </div>
        </div>

        <div className="sideBar">
          <div className="layer">
            <h2>RECENT POSTS</h2>
            <ul>
              <li style={{ fontWeight: "bold" }} className="points">
                React v17.0 Release Candidate: No New Features
              </li>
              <li className="points">React v16.13.0</li>
              <li className="points">
                Building Great User Experiences with Concurrent Mode and
                Suspense
              </li>
              <li className="points">
                Preparing for the Future with React Prereleases
              </li>
              <li className="points">Introducing the New React DevTools</li>
              <li className="points">React v16.9.0 and the Roadmap Update</li>
              <li className="points">
                Is React Translated Yet? ¡Sí! Sim! はい！
              </li>
              <li className="points">React v16.8: The One With Hooks</li>
              <li className="points">
                React v16.7: No, This Is Not the One With Hooks
              </li>
              <li className="points">React 16.x Roadmap</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
