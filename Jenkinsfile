pipeline {
    agent any
     environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhubcreds')
     }

	

    stages {
        stage('Build and Deploy') {
            steps {
                sh 'sudo docker build -t chetana98/helloworld:sumanth .'
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'  
                sh 'sudo docker push chetana98/helloworld:sumanth'
               
                           
            }
         }
    }
}
