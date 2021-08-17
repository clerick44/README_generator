//Generates link to license badge
function renderLicenseBadge(response) {
  let license = response.license;
  switch (license) {
    case "None":
      licenceBadgeUrl = "";
      break;
    case "MIT License":
      licenceBadgeUrl =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Mozilla Public License 2.0":
      licenceBadgeUrl =
        "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)";
      break;
    case "GNU AGPLv3":
      licenceBadgeUrl =
        "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
      break;
    case "GNU GPLv3":
      licenceBadgeUrl =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "GNU LGPLv3":
      licenceBadgeUrl =
        "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
      break;
  }
}

//Generates README text calls license badge builder first
function generateMarkdown(response) {
  renderLicenseBadge(response);
  console.log(licenceBadgeUrl);

  return `# ${response.title}          ${licenceBadgeUrl}

  ## Description                 
  ${response.repoDesc}

## Table of Contents (Optional)
If your README is long, add a table of contents to make it easy for users to find what they need.
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${response.installation}

## Usage
${response.usage}

## License
${response.license}

## Contributing
${response.credits}

## Tests
${response.tests}

## Questions
If you have any questions please reach out at <${response.email}>

visit my Github profile at [${response.userName}](https://github.com/${response.userName})
`;
}

module.exports = generateMarkdown;
