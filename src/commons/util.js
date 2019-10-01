function validateYear(year) {
    var text = /^[0-9]+$/;
      if(year.length==4) {
        if (year != 0) {
            if ((year != "") && (!text.test(year))) {
                return false;
            }

            if (year.length != 4) {
                return false;
            }
            var current_year=new Date().getFullYear();
            if((year < 1120) || (year > current_year))
             {
                return false;
             }
            return true;
        }
     }
}