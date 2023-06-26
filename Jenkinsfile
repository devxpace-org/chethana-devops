pipeline {
    agent any

    stages {
        stage('Build and Deploy') {
            steps {
                sh '''sudo docker build -t chetanadockerimage .
                      sudo docker tag chetandockerimage chetana98/helloworld:docker1.0
                      sudo docker push chetana98/helloworld:docker1.0
                '''          
            }
         }
       stage ('Starting downstream job ') {
           steps {
               build job: 'first-job'
           }      
        }
    }
}