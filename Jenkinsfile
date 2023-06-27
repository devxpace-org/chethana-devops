pipeline {
    agent any

	}

    stages {
        stage('Build and Deploy') {
            steps {
                sh 'sudo docker build -t chetana98/nicejob:1.0 .'   
                sh 'sudo docker run -d -p 5000:3000 --name nicejob chetana98/nicejob:1.0'
                           
            }
         }
    }
}
