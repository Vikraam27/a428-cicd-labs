node {
    docker.image('node:lts-bullseye-slim').withRun('-p 3000:3000') {
        stage('Install package') {
        sh "npm install"
    }
    stage('Test') {
        sh './jenkins/scripts/test.sh'
    }
    }
}