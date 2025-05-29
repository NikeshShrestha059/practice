const factory={
    branch:"lokanthali",
    employeesNumber:9087654320,
    manager:{
        name:"Raja",
        contact:9087654321
    },
    machine:["xray", "printer"],
    totalMachines(){
        return this.machine.length
    },
    print(){
        console.log("printer is working")
    },
    getManagerName(){
        return this.manager.name
    },
    generateXray(){
        console.log("Xray is working")
    }

};

factory.print();
factory.generateXray();
console.log("name:",factory.getManagerName());
console.log(factory.totalMachines());