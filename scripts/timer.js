function Timer(){

    this.get = function(string){
        var start = moment();
        var end   = moment(string, "MMM MMMM-D DD");

        return end.from(start);       
    }
    this.isToday = function(date){
        return moment.isDate(date);
    }
}