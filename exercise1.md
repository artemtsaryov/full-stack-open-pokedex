Thoughts on part 11a:

Let's take for example a C/C++ project. What are the tools to support linting, testing and building?
As for linting there are dozens of options: from the original Lint (though it only supports C, not C++) to more modern and well known tools like Klocwork, CppCheck or Coverity some of each even provide cloud-based static analysis services.
When it comes to testing there are several types of testing to consider that heavily depend on what product we develop.
Given we picked a C++ project as the example it is likely the project is going to have code that implements complex algorithms and data structures.
That means unit testing is something we will definetely need with help of, for instance, Google Test framework.
As for integration or system(e2e) testing it depends on the project itself, sometimes it may not make much sense, but sometimes one would choose to build their own e2e test framework that closely simulates that environment and typical usage of the software.
Moving to the building phase, there has to be a compilcation step which must be done with one of the C++ compilers. The choice will depend on the platform(architecture) we are going to run the software on and our personal preferences.
Since for a C++ project the build step produces artifacts in the form of executable binaries, we will need to think about some proper storage with versioning for them which could even lead us to one of the package manager for C++ or Nexus server.

Speaking of choosing the build system to orchestrate that entire CI/CD process I believe the right decision would be to choose the system that is known  to the team to get the most out of it. Other than that one should consider cloud vs on-premise, configuration language, supported features and other characteristics of a CI/CD system.
Apart from Jenkins and Github Actions a lot of projects nowadays use Gitlab CI and Azure Devops server (formerly TFS).

For our example C++ project it is hard to decide on cloud vs on-premise CI/CD solution without a detailed context. It is likely that such a decision would be influenced by factors such as company technical policy, existing environment, security concerns and more.
One possible scenario might be to start with a cloud solution to get the software up and running as quickly as the team can, get the feedback from consumers and/or business and then decide whether switching to on-premise CI/CD tooling can help gain any profit.



