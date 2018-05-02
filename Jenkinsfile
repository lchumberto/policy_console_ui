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
                sh 'pwd && ls -al'
                sh './build.sh || exit 1'
                //sh 'docker build -t bluecedar/policy_console_ui:0.1.0 . || exit 1'
                //sh 'docker rmi node:8 || exit 0'
                //sh 'docker push bluecedar/policy_console_ui:0.1.0'
                //sh 'docker rmi bluecedar/policy_console_ui:0.1.0'

                // Build and push image with Jenkins' docker-plugin
                withDockerRegistry([credentialsId: 'DockerHub-Credentials', url: "https://registry.hub.docker.com"]) {
                  // we give the image the same version as the .war package
                  def image = docker.build("bluecedar/policy_console_ui:0.1.0", ".")
                  image.push()
                }

                //docker.build("bluecedar/policy_console_ui")
                //docker.withRegistry('https://registry.hub.docker.com', 'DockerHub-Credentials') {
                //    app.push("test")
                //    //app.push("latest")
                //}
            //post {
            //  success {
            //      echo 'Now Archiving...'
            //      archiveArtifacts artifacts: '**/target/*.war'
            //  }
            //}

            echo "Building..."

            }
        }

        stage ('Deploy'){
            parallel{
                stage ('Deploy to Staging'){
                    steps {
                        echo "Code deployed on Staging"
                        //sh "scp -i /home/jenkins/tomcat-demo.pem **/target/*.war ec2-user@${params.tomcat_dev}:/var/lib/tomcat7/webapps"
                        sh 'docker push bluecedar/policy_console_ui:0.1.0'
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