<template>
  <div>
  <!-- <Tutorial/> -->
    
  <span style="color: #000">{{name}}</span>
  </div>

</template>

<script>
export default {
 
  asyncData({req})  {
   console.log(req.body);
    return {
      name: JSON.stringify(req.body),
     
    }
  }
}
</script>
