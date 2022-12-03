node {
    docker.image('node:lts-bullseye-slim').inside {
        stage('Install package') {
            sh "rm -rf package-lock.json"
        }
    }
}