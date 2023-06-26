pipeline {
    agent any

    stages {
        stage('Build and Deploy') {
            steps {
                sh '''sudo docker build -t chetanadockeriage:1.0 .
                      sudo docker tag chetanadockerimage:1.0 chetana98/helloworld:1.0
                      sudo docker push chetana98/helloworld:1.0
                '''          
            }
        }
    }
}