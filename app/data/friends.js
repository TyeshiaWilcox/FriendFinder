<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>FriendFinder</title>

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <script src="https://code.jquery.com/jquery.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/chosen/1.5.1/chosen.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/chosen/1.5.1/chosen.jquery.min.js"></script>

</head>

<body>

  <div class="container">

    <h2>Survey Questions</h2>
    <hr>

    <h3><strong>About You</strong></h3>
    <h4>Name (Required)</h4>
    <input type="text" id="name" class="form-control" required>

    <h4>Link to Photo Image (Required)</h4>
    <input type="text" id="photo" class="form-control" required>

    <hr>

    <h3><strong>Question 1</strong></h3>
    <h4>Your mind is always buzzing with unexplored ideas and plans.</h4>
    <select class="chosen-select" id="q1">
      <option value=""></option>
      <option value="1">1 (Strongly Disagree)</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5 (Strongly Agree)</option>
    </select>

    <h3><strong>Question 2</strong></h3>
    <h4>Generally speaking, you rely more on your experience than your imagination.</h4>
    <select class="chosen-select" id="q2">
      <option value=""></option>
      <option value="1">1 (Strongly Disagree)</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5 (Strongly Agree)</option>
    </select>


    <h3><strong>Question 3</strong></h3>
    <h4>You find it easy to stay relaxed and focused even when there is some pressure.</h4>
    <select class="chosen-select" id="q3">
      <option value=""></option>
      <option value="1">1 (Strongly Disagree)</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5 (Strongly Agree)</option>
    </select>


    <h3><strong>Question 4</strong></h3>
    <h4>You rarely do something just out of sheer curiosity.</h4>
    <select class="chosen-select" id="q4">
      <option value=""></option>
      <option value="1">1 (Strongly Disagree)</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5 (Strongly Agree)</option>
    </select>


    <h3><strong>Question 5</strong></h3>
    <h4>People can rarely upset you.</h4>
    <select class="chosen-select" id="q5">
      <option value=""></option>
      <option value="1">1 (Strongly Disagree)</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5 (Strongly Agree)</option>
    </select>


    <h3><strong>Question 6</strong></h3>
    <h4>It is often difficult for you to relate to other people’s feelings.</h4>
    <select class="chosen-select" id="q6">
      <option value=""></option>
      <option value="1">1 (Strongly Disagree)</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5 (Strongly Agree)</option>
    </select>


    <h3><strong>Question 7</strong></h3>
    <h4>In a discussion, truth should be more important than people’s sensitivities.</h4>
    <select class="chosen-select" id="q7">
      <option value=""></option>
      <option value="1">1 (Strongly Disagree)</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5 (Strongly Agree)</option>
    </select>

    <h3><strong>Question 8</strong></h3>
    <h4>You rarely get carried away by fantasies and ideas.</h4>
    <select class="chosen-select" id="q8">
      <option value=""></option>
      <option value="1">1 (Strongly Disagree)</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5 (Strongly Agree)</option>
    </select>

    <h3><strong>Question 9</strong></h3>
    <h4>You think that everyone’s views should be respected regardless of whether they are supported by facts or not.</h4>
    <select class="chosen-select" id="q9">
      <option value=""></option>
      <option value="1">1 (Strongly Disagree)</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5 (Strongly Agree)</option>
    </select>

    <h3><strong>Question 10</strong></h3>
    <h4>You feel more energetic after spending time with a group of people.</h4>
    <select class="chosen-select" id="q10">
      <option value=""></option>
      <option value="1">1 (Strongly Disagree)</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5 (Strongly Agree)</option>
    </select>

    <br>
    <br>

    <button type="submit" class="btn btn-primary btn-lg btn-block" id="submit"><i class="fa fa-check-circle" aria-hidden="true"></i>
     Submit</button>

    <hr>
    <footer class="footer">
      <div class="container">
        <p><a href="/api/friends">API Friends List</a> | <a href="https://github.com/afhaque/friendfinder">GitHub Repo</a></p>
      </div>
    </footer>

  </div>

  <div id="results-modal" class="modal fade" role="dialog">
    <div class="modal-dialog">

      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button class="close" data-dismiss="modal">&times;</button>
          <h2 class="modal-title"><strong>Best Match</strong></h2>
        </div>
        <div class="modal-body">
          <h2 id="match-name"></h2>
          <img id="match-img" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg" alt="">
        </div>
        <div class="modal-footer">
          <button class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>

    </div>
  </div>

  <script type="text/javascript">
    // Chosen CSS
    var config = {
      ".chosen-select": {},
      ".chosen-select-deselect": {
        allow_single_deselect: true
      },
      ".chosen-select-no-single": {
        disable_search_threshold: 10
      },
      ".chosen-select-no-results": {
        no_results_text: "Oops, nothing found!"
      },
      ".chosen-select-width": {
        width: "95%"
      }
    };

    for (var selector in config) {
      $(selector).chosen(config[selector]);
    }

    $("#submit").on("click", function(event) {
      event.preventDefault();

      function validateForm() {
        var isValid = true;
        $(".form-control").each(function() {
          if ($(this).val() === "") {
            isValid = false;
          }
        });

        $(".chosen-select").each(function() {

          if ($(this).val() === "") {
            isValid = false;
          }
        });
        return isValid;
      }

      if (validateForm()) {
        var userData = {
          name: $("#name").val(),
          photo: $("#photo").val(),
          scores: [
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val()
          ]
        };

        $.post("/api/friends", userData, function(data) {

          $("#match-name").text(data.name);
          $("#match-img").attr("src", data.photo);

          $("#results-modal").modal("toggle");

        });
      } else {
        alert("Please fill out all fields before submitting!");
      }
    });
  </script>

</body>

</html>
