/* eslint-disable */
import "bootstrap";
import "./style.css";

var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var ext = [".com", ".net", ".us", ".io"];

window.onload = function() {
  //write your code here
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let w = 0; w < noun.length; w++) {
        for (let x = 0; x < ext.length; x++) {
          console.log(pronoun[i] + adj[j] + noun[w] + ext[x]);
        }
      }
    }
  }
};
