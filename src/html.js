import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes} lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes} className="light">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Define required variables and functions
                let preferredTheme;
                function onThemeChange () {};
                function setTheme(newTheme) {
                  const bgColor = newTheme === "dark" ? "#0f172a" : "#f1f5f9"; // Bg color for meta__theme-color && document root to match theme color. �

                  window.__theme = newTheme;
                  preferredTheme = newTheme;
                  document.body.className = newTheme;
                  document.querySelector(":root").style.background = bgColor;

                  // Remove theme-color meta and replace it with new one
                  try {
                    document.querySelector("[name='theme-color']").remove();
                  } catch (error) {
                    
                  } finally {
                    const newThemeColorMeta = document.createElement("meta");
                    newThemeColorMeta.name = "theme-color";
                    newThemeColorMeta.setAttribute("content", bgColor);
                    document.querySelector("head").appendChild(newThemeColorMeta);
                  }

                  window.__onThemeChange();
                }
                function setPreferredTheme (newTheme) {
                  setTheme(newTheme);
                  try {
                    localStorage.setItem('theme', newTheme);
                  } catch (err) {}
                }
                // Assign (basically get and set theme) methods to the window property to make them available globally
                window.__onThemeChange = onThemeChange;
                window.__setPreferredTheme = setPreferredTheme;

                // Add a listener for user theme preferrences and update the theme when it changes.
                let darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
                darkQuery.addEventListener("change", function(event) {
                  window.__setPreferredTheme(event.matches ? 'dark' : 'light')
                });

                try {
                  // Get the user's preffered theme from local storage.
                  preferredTheme = localStorage.getItem('theme');
                } catch (err) { }

                // Set the theme to the preffered theme if it exists or use the user's system default
                setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
              })();
            `,
          }}
        />
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
