node {
    docker.image('node:lts-bullseye-slim').inside {
    stage('Install package') {
        sh "npm install"
    }
    stage('Test') {
        sh './jenkins/scripts/test.sh'
    }
    }
}

// test scm trigger