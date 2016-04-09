Ext.define('qrunch.view.InfCarousel',{
  xtype: 'InfCarousel',
  extend: 'Ext.carousel.Carousel',
  
  rotateItemBack: function(item){
    if(!item) return null;
    var initem = item.items;
    var numitems = initem.length;
    var newItem = [];
    
    newItem.push(initem[numitems-1]);
    for(i=0; i<numitems-1; ++i)
      newItem.push(initem[i]);
    
    return newItem;
  },
  
  rotateItemFront: function(item){
    if(!item) return null;
    var initem = item.items;
    var numitems = initem.length;
    var newItem = [];
    
    for(i=0; i<numitems-1; ++i)
      newItem.push(initem[i+1]);
    
    newItem.push(initem[0]);
    
    return newItem;
  },
  
  config:{
    indicator: false,
    listeners:{
        activeitemchange:function(){
            this.fireEvent('activeitemchangeloop', arguments);
        },
  
        activeitemchangeloop: function ()
        {
          var activeIndex = this.getActiveIndex(),
              maxIndex = this.getMaxItemIndex();
          
          if(activeIndex == 0)
          {
              var items = this.getItems();
              
              var newItems = this.rotateItemBack(items);
              this.removeAll(false, false);
              this.add(newItems);
                                              
              this.setActiveItem(1);
              this.refresh();
          }
          
          else if(activeIndex == maxIndex)
          {
              var items = this.getItems();
              
              var newItems = this.rotateItemFront(items);
              this.removeAll(false, false);
              this.add(newItems);
                                                          
              this.setActiveItem(maxIndex-1);
              this.refresh();
          }      
        }
    }
  }
                
});