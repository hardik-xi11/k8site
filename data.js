const k8sData = {
    "control-plane": {
        title: "Control Plane",
        subtitle: "The Brain of the Cluster",
        description: "The control plane is responsible for container orchestration and maintaining the desired state of the cluster. It manages worker nodes and the Pods in the cluster.",
        details: [
            "Makes global decisions about the cluster (e.g., scheduling).",
            "Detects and responds to cluster events.",
            "A cluster can have one or more control plane nodes for high availability."
        ],
        icon: "🧠"
    },
    "kube-apiserver": {
        title: "kube-apiserver",
        subtitle: "The Central Hub",
        description: "The API server is the front end for the Kubernetes control plane. It exposes the Kubernetes API and handles all REST API requests.",
        details: [
            "Highly scalable and handles concurrent requests.",
            "Authenticates and Authorizes requests (ABAC, RBAC).",
            "Validates and processes API objects (pods, services, etc.).",
            "Coordinates processes between control plane and worker nodes.",
            "Only component that connects directly to etcd."
        ],
        icon: "🔗"
    },
    "etcd": {
        title: "etcd",
        subtitle: "The Cluster Database",
        description: "A strongly consistent, distributed key-value store used as Kubernetes' backing store for all cluster data.",
        details: [
            "Stores all configurations, states, and metadata.",
            "Uses the Raft consensus algorithm for consistency.",
            "Allows clients to subscribe to events via Watch() API.",
            "Stores objects under the /registry directory key."
        ],
        icon: "💾"
    },
    "kube-scheduler": {
        title: "kube-scheduler",
        subtitle: "The Matchmaker",
        description: "Watches for newly created Pods with no assigned node, and selects a node for them to run on.",
        details: [
            "Uses filtering to find nodes satisfying Pod requirements (CPU, memory, affinity).",
            "Uses scoring to rank filtered nodes and select the best fit.",
            "Has a pluggable scheduling framework for custom logic.",
            "Supports Dynamic Resource Allocation (DRA) for GPUs/FPGAs."
        ],
        icon: "⚖️"
    },
    "kube-controller-manager": {
        title: "kube-controller-manager",
        subtitle: "The State Enforcer",
        description: "Runs controller processes. Controllers are control loops that watch the state of your cluster, then make or request changes where needed.",
        details: [
            "Ensures the current state matches the desired state.",
            "Manages built-in controllers (Deployment, ReplicaSet, DaemonSet, Job).",
            "Node controller notices and responds when nodes go down.",
            "Endpoints controller populates the Endpoints object."
        ],
        icon: "⚙️"
    },
    "cloud-controller-manager": {
        title: "Cloud Controller Manager",
        subtitle: "The Cloud Bridge",
        description: "Embeds cloud-specific control logic. It links your cluster into your cloud provider's API.",
        details: [
            "Node controller checks cloud provider to see if a node has been deleted.",
            "Route controller sets up routes in the underlying cloud infrastructure.",
            "Service controller creates, updates, and deletes cloud load balancers."
        ],
        icon: "☁️"
    },
    "worker-node": {
        title: "Worker Node",
        subtitle: "The Workhorse",
        description: "Worker nodes host the Pods that are the components of the application workload. The control plane manages these nodes.",
        details: [
            "Runs containerized applications.",
            "Reports status back to the control plane via Kubelet.",
            "Contains Kubelet, Kube-proxy, and Container Runtime."
        ],
        icon: "🏗️"
    },
    "kubelet": {
        title: "Kubelet",
        subtitle: "The Node Agent",
        description: "An agent that runs on each node in the cluster. It makes sure that containers are running in a Pod.",
        details: [
            "Registers the node with the API server.",
            "Takes a set of PodSpecs and ensures the containers described are running and healthy.",
            "Manages liveness, readiness, and startup probes.",
            "Uses Container Runtime Interface (CRI) to talk to the runtime."
        ],
        icon: "🩺"
    },
    "kube-proxy": {
        title: "kube-proxy",
        subtitle: "The Network Proxy",
        description: "A network proxy that runs on each node, implementing part of the Kubernetes Service concept.",
        details: [
            "Maintains network rules on nodes allowing network communication to Pods.",
            "Uses IPTables (default), NFTables, or IPVS to route traffic.",
            "Optional in modern setups if CNI plugins (like Cilium) handle routing via eBPF."
        ],
        icon: "🔀"
    },
    "container-runtime": {
        title: "Container Runtime",
        subtitle: "The Engine",
        description: "The software that is responsible for running containers.",
        details: [
            "Pulls images from registries, runs and manages container processes.",
            "Kubernetes supports CRI-compliant runtimes (containerd, CRI-O, etc.).",
            "CRI (Container Runtime Interface) API lets Kubernetes interact interchangeably."
        ],
        icon: "📦"
    }
};
