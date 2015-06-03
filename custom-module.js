/**
 * Created by Ivan_Kauryshchanka on 6/1/2015.
 */

module.exports = function(){
    console.log(this);
    this.delete = function(){
        console.log('delete method');
    };
    this.save = function(){
        console.log('save method');
    };
};