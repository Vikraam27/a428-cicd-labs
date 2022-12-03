node {
    docker.image('node:lts-bullseye-slim') {
    stage('Install package') {
        sh "npm install"
    }
    stage('Test') {
        sh './jenkins/scripts/test.sh'
    }
    }
}