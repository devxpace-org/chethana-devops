pipeline {
    agent any

    stages {
        stage('Build and Deploy') {
            steps {
                
                sh 'sudo docker build -t chetana98/helloworld:1.0 .'
                sh 'sudo docker push chetana98/helloworld:1.0'
                        
            }
         }
    }
}