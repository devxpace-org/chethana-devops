pipeline {
    agent any

    stages {
        stage('Build and Deploy') {
            steps {

                
                sh 'sudo docker build -t chetana98/helloworld:1.0 .'
<<<<<<< HEAD
=======
                sh 'sudo chmod 666 /var/run/docker.sock'
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
                sh 'docker push chetana98/helloworld:1.0'
>>>>>>> 2c9a38a32cb61ad99c0de406752a74c576a2306b
        }      
        }
        
    }
}
