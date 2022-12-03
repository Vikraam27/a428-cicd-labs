agent {
    docker {
        image 'node:lts-bullseye-slim'
        args '-p 3000:3000' 
    }
}
Node {
    stage('Install package') {
        sh "npm install"
    }
    stage('Test') {
        sh './jenkins/scripts/test.sh'
    }
}