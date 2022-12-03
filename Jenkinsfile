node {
    docker.image('node:lts-bullseye-slim').inside {
        stage('Install package') {
            sh 'git rev-parse --abbrev-ref HEAD'
        }
    }
}