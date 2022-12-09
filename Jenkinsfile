node {
    docker.image('node:lts-bullseye-slim').inside {
        stage('Build') {
            checkout scm
            sh "npm install"
        }
        stage('Test') {
            checkout scm
            sh './jenkins/scripts/test.sh'
        }
        stage('Manual Approval') {
            checkout scm
            sh './jenkins/scripts/deliver.sh' 
            input message: 'Lanjutkan ke tahap Deploy? (Klik "Proceed" untuk mengakhiri)' 
            sh './jenkins/scripts/kill.sh' 
        }
    }
     stage('Deploy') {
        checkout scm
        sshagent(credentials:['Login_Cloud_Server']){
            sh 'ssh  -o StrictHostKeyChecking=no  vikram@35.219.77.187 "bash deploy.sh"'
        }
    }
}