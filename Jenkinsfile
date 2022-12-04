node {
    docker.image('node:lts-bullseye-slim').inside {
        stage('Install package') {
            checkout scm
            sh "npm install"
        }
    }
}