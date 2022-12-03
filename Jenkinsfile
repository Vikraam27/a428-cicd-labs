node {
    docker.image('node:lts-bullseye-slim', '-p 3000:3000').inside {
        stage('Install package') {
        sh "npm install"
    }
    stage('Test') {
        sh './jenkins/scripts/test.sh'
    }
    }
}