// function to populate the html file with the team profile
function htmlTemplate(answers) {
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    
        <!-- Bootstrap CSS -->
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
        <!-- BS Icons -->
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css"
        />
    
        <title>Team Profile</title>
      </head>
      <body class="bg-dark">
        <nav class="navbar navbar-light bg-dark">
          <div class="container-fluid d-flex justify-content-center py-4">
            <span class="navbar-brand mb-0 h1 fs-1 text-light">🍻 Team Profile 🍻</span>
          </div>
        </nav>
    
        <div class="row">
        <!-- Manager -->
          <div class="col m-2">
            <div class="card text-center">
              <div class="card-header fs-3 bg-success text-light py-4"><i class="bi bi-umbrella"></i> Manager: ${answers.managerName}</div>
              <div class="card-body">
                <h5 class="card-title text-start">ID: ${answers.managerId}</h5>
                <h5 class="card-title text-start">Email: <a href="mailto:${answers.managerEmail}">${answers.managerEmail}</a></h5>
                <h5 class="card-title text-start">Phone number: ${answers.managerNumber}</h5>
              </div>
            </div>
          </div>

          <!-- Engineer -->
          <div class="col m-2">
            <div class="card text-center">
            <div class="card-header fs-3 bg-success text-light py-4"><i class="bi bi-tools"></i> Engineer: ${answers.engineerName}</div>
            <div class="card-body">
              <h5 class="card-title text-start">ID: ${answers.engineerId}</h5>
              <h5 class="card-title text-start">Email: <a href="mailto:${answers.engineerEmail}">${answers.engineerEmail}</a></h5>
              <h5 class="card-title text-start">GitHub: <a href="https://github.com/${answers.engineerGitHub}">${answers.engineerName}'s GitHub</a></h5>
              </div>
            </div>
          </div>
    
          <!-- Intern -->
          <div class="col m-2">
            <div class="card text-center">
            <div class="card-header fs-3 bg-success text-light py-4"><i class="bi bi-mortarboard"></i> Intern: ${answers.internName}</div>
            <div class="card-body">
              <h5 class="card-title text-start">ID: ${answers.internId}</h5>
              <h5 class="card-title text-start">Email: <a href="mailto:${answers.internEmail}">${answers.internEmail}</a></h5>
              <h5 class="card-title text-start">School: ${answers.internSchool}</h5>
              </div>
            </div>
          </div>
          
        </div>
    
        <!-- Bootstrap Bundle with Popper -->
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossorigin="anonymous"
        ></script>
      </body>
    </html>
    `;
}

module.exports = htmlTemplate;