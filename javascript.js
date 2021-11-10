javascript
<script type="text/javascript">
var persona = function(nome, cognome) {
  this.nome = nome;
  this.cognome = cognome;
  this.stampaNomeCognome = function() {
    alert(this.nome + "n" + this.cognome)
  }
}
var a = new persona("Alberto", "Bottarini");
a.stampaNomeCognome();
</script>