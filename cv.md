# Sai Krishna Anche

krishanche@gmail.com | 669-529-7565
linkedin.com/in/krishna-anche

## Summary

Senior DevOps / Platform / SRE Engineer with 7+ years delivering measurable results across AI startups, semiconductor HPC, and enterprise SaaS. Owned end-to-end infrastructure at a $2.5B AI startup, scaled CI/CD for 150+ engineers, migrated 300+ apps to AWS (35% TCO reduction), and managed 500+ node Kubernetes clusters. Consistently cut cloud spend by 30%, accelerated pipelines by 40%, and shortened release cycles. Certified Kubernetes Administrator (CKA) and AWS Certified DevOps Engineer Professional.

## Professional Experience

### Web AI | Austin, TX — Senior DevOps / Platform Engineer
**Sep 2025 – Present**

- Led infra team at a $2.5B AI startup. Owned all infrastructure, CI/CD, security, observability, and client connectivity for Navigator (model training UI), Runtime (inference engine), and Platform (distributed device orchestration) across dev, staging, and production provisioned entirely via Terraform and Ansible, orchestrated on Kubernetes, and deployed with Helm with no dedicated infra support.
- Implemented secure multi cloud-environment connectivity for enterprise clients. Built AWS PrivateLink and VPC peering between webAI and Aura cloud infrastructure, and site-to-site VPN tunnels into Air New Zealand hybrid network. Enabled private AI model delivery with zero data traversing the public internet.
- Supported AI engineering teams in parallel by provisioning and maintaining on-prem Mac Studio GPU clusters (~120 nodes) using Ansible for Navigator model training and Runtime inference. Managed Kubernetes namespaces and Helm chart deployments for client model workloads. Reduced model build failures by 65% through retry logic and pipeline checkpointing.
- Built a reusable Terraform module library and standardized Ansible playbooks and Helm chart templates. Cut client environment provisioning from 4 hours to under 20 minutes, a 70% reduction that shortened enterprise onboarding timelines for a Series A startup managing every dollar of spend.
- Owned GitLab CI/CD across 40+ repositories covering Navigator, Runtime, Platform, and client integration services. Enforced GitFlow, semantic versioning, and release gates. Improved pipeline throughput by 40%, cutting average runtime from 35 to 21 minutes.
- Embedded DevSecOps controls into all 40+ pipelines: Aikido SAST, Trivy scanning, HashiCorp Vault secret rotation, and OPA Gatekeeper. Built multi-tenant Kubernetes namespace isolation with per-client Vault secrets and RBAC. Passed all quarterly security audits with zero exceptions for both Aura and Air New Zealand.
- Reduced cloud spends by 30% (~$18K/month) through Terraform Sentinel cost policies and AWS resource tagging governance. Achieved without reducing platform capacity or impacting client SLAs.
- Built centralized observability using Grafana, Datadog, and CloudWatch with SLI dashboards and error-budget tracking. Cut MTTD from 25 minutes to under 5 minutes and maintained 99.95% uptime for production AI workloads serving Aura and Air New Zealand.
- Built an AI-driven incident triage automation using MCP servers integrated with Remedy, Confluence, and JIRA, enabling LLM-based correlation of alerts, historical runbooks, and ticket data to automatically classify incidents, enrich root-cause context, and trigger remediation workflows, significantly accelerating incident resolution and observability operations.
- Designed and implemented an observability pipeline ingesting high-volume Splunk log data via Prefect workflows into InfluxDB time-series storage, enabling real-time Grafana dashboards and alerting that improved system health visibility and reduced incident detection.

### Siman Pro Inc | TX — Senior DevOps / Infrastructure Engineer
**Jan 2025 – Sep 2025**

- Drove infrastructure delivery for a 150+ engineer org across Azure and AWS, owning Kubernetes rollout (EKS/K3s), Terraform IaC standardization across 8 environments, and full CI/CD automation with GitLab Runner autoscaling on EC2 spot instances. Delivered on schedule and under budget.
- Strengthened security and compliance by deploying HashiCorp Vault for automated secrets injection, enforcing OPA Gatekeeper policies and RBAC, and achieving full CIS Kubernetes Benchmark compliance, passing internal audit with zero findings.
- Optimized platform efficiency by building Docker multi-stage pipelines cutting image sizes by 70%, refactoring Ansible into reusable collections, and reducing CI/CD infrastructure spend by 40% while maintaining executive visibility through structured reporting across 4 concurrent workstreams.

### NXP Semiconductors | Austin, TX — Senior DevOps / Infrastructure Engineer
**Jun 2022 – Jan 2025**

- Ran Kubernetes infrastructure (EKS and on-prem, 500+ node clusters) supporting design teams across chip design, HPC simulation, and CI/CD workloads.
- Migrated on-prem data centers to AWS (EC2, EKS, ECS, Lambda, VPC) for 300+ internal applications, cutting infrastructure TCO by 35% and retiring end-of-life hardware.
- Supported chip design programs (i.MX95, Kiaron) by containerizing HPC simulation and build environments, giving 15+ hardware design teams reproducible, isolated build workflows.
- Owned regression farm infrastructure running 2,000+ nightly RTL and gate-level simulation jobs. Tuned LSF queue policies, CPU allocation, and per-job memory limits, lifting throughput by 35% and cutting job failure rate by 50%.
- Built GitOps pipeline using GitLab, ArgoCD, Terraform, and Helm. Every infrastructure change went through with a full audit trail, from code review, automated testing, and version control.
- Integrated HashiCorp Vault with Kubernetes for automated secrets rotation and policy-based access control across 300+ internal services. Satisfied SOX and ISO audit requirements with zero findings.
- Set up observability using Prometheus, Grafana, and ELK with custom dashboards and Alert manager rules. Reduced MTTR on P1 incidents.
- Automated nightly regression pipelines in Jenkins and GitLab with post-run log parsing, failure categorization, and health dashboards. Cut manual triage effort by 70%.

### NCR Corp | India — System Administrator → DevOps Engineer
**Aug 2017 – Jun 2021**

- Administered RHEL and Sun Solaris production servers covering kernel patching, performance tuning, LVM management, user administration, and process monitoring across critical business infrastructure.
- Configured and maintained F5 Big-IP load balancers for high availability. Managed LAN/WAN networking, routers, gateways, DNS, LDAP, FTP, and AutoSys job scheduling across the enterprise network.
- Managed WebLogic Server (7.x to 10.x): installation, clustering, JVM heap and GC memory tuning, and log analysis for root cause resolution of production incidents.
- Automated routine deployments and operational tasks using ANT and Unix Shell scripting. Built the scripting and automation foundation that led to the transition into DevOps.
- Promoted to DevOps Engineer in Nov 2018. Automated security patching across 1,000+ Linux/UNIX servers using Red Hat Satellite, cutting manual operations time by 80% and achieving 100% patch compliance within SLA windows.
- Built Jenkins CI/CD pipelines for 20+ microservices integrated with Maven, Ant, and Nexus. Shortened the release cycle from 2 weeks to 2 days.
- Containerized 15+ internal services with Docker and published Rancher catalog templates. Three development teams adopted them, cutting deployment setup time by 70%. Moved 200+ engineers from SVN to Git/Bitbucket with GitFlow branching and access governance in place.

## Certifications

- Certified Kubernetes Administrator (CKA) — Cloud Native Computing Foundation (CNCF)
- AWS Certified DevOps Engineer – Professional — Amazon Web Services

## Education

- M.S. in Computer Science, Pace University, New York (Aug 2021 – Dec 2022)
- B.Eng. in Computer Science, Anna University, India (Aug 2013 – May 2017)