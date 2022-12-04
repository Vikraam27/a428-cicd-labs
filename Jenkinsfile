node {
    docker.image('node:lts-bullseye-slim').inside {
        stage('Build') {
            checkout scm
            sh "rm -r node_modules"
            sh "npm install"
        }
    }
}