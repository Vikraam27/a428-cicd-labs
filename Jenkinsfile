node {
    docker.image('node:lts-bullseye-slim').inside {
        stage('Build') {
            checkout scm
            sh "npm install"
        }
    }
}