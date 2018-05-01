pipeline {
    agent { label 'swarm' }
    
    /*parameters { 
         string(name: 'tomcat_dev', defaultValue: '35.166.210.154', description: 'Staging Server')
         string(name: 'tomcat_prod', defaultValue: '34.209.233.6', description: 'Production Server')
    } 
    triggers {
         pollSCM('* * * * *') // Polling Source Control
    }*/

stages{
        stage('Init'){
            steps {
                echo "Testing..."
                sh "ls -al"
            }
        }
    
        stage('Build'){
            steps {
            //    sh 'source /etc/profile.d/maven.sh && mvn clean package'
                sh 'sudo docker run --rm -v "$PWD":/usr/app -w /usr/app node:8 ./build.sh || exit 1'
                //sh 'docker build -t bluecedar/policy_console_ui:0.1.0 .'
            }
            //post {
            //  success {
            //      echo 'Now Archiving...'
            //      archiveArtifacts artifacts: '**/target/*.war'
            //  }
            //}
        }

        stage ('Deploy'){
            parallel{
                stage ('Deploy to Staging'){
                    steps {
                        echo "Code deployed on Staging"
                        //sh "scp -i /home/jenkins/tomcat-demo.pem **/target/*.war ec2-user@${params.tomcat_dev}:/var/lib/tomcat7/webapps"
                    }
                }

                stage ("Deploy to Production"){
                    steps {
                        echo "Code deployed on Production"
                        //sh "scp -i /home/jenkins/tomcat-demo.pem **/target/*.war ec2-user@${params.tomcat_prod}:/var/lib/tomcat7/webapps"
                    }
                }
            }
        }
    }
}