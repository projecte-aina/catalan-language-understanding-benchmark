let evaluationSent=!1;function checkMail(){/[\w-]+@\w+\.\w{2,3}/.test($(this).get(0).value)?$(this).parent().removeClass("has-error").children("div.help-block").remove():0===$("#emailDiv > div.help-block").length&&$("#emailDiv").addClass("has-error").append('<div class="help-block">Mail '+$(this).get(0).value+" is not valid</div>")}function checkLink(){""===$(this).get(0).value||/(?:(?:http|https):\/\/)?(?:www\.)?\w+(?:\.\w{2,3})/.test($(this).get(0).value)?$(this).parent().removeClass("has-error").children("div.help-block").remove():0===$(this).parent().children("div.help-block").length&&$(this).parent().addClass("has-error").append('<div class="help-block">URL not valid not valid</div>')}function checkFileInPond(){8===new FormData($("form")[0]).getAll("filepond").length?$("#pondDiv").removeClass("has-error").children("div.help-block").remove():0===$("#pondDiv").children("div.help-block").length&&($("#pondDiv").addClass("has-error"),$("#pondDiv").append('<div class="help-block">Missing files</div>'))}function checkText(){null==$(this).get(0).value||""==$(this).get(0).value?0===$(this).parent().children("div.help-block").length&&$(this).parent().addClass("has-error").append('<div class="help-block">Field not valid</div>'):$(this).parent().removeClass("has-error").children("div.help-block").remove()}function checkChecked(){$(this).is(":checked")?$(this).parent().removeClass("has-error").children("div.help-block").remove():0===$(this).parent().children("div.help-block").length&&$(this).parent().addClass("has-error").append('<div class="help-block">Please accept the data policy to submit</div>')}function submitForm(e){evaluationSent=!0;const t=new FormData($("#evaluation_form")[0]);$("#submit_button").val("Submit").attr("disabled",!0);const a=Toastify({text:"Evaluating, please wait ...",duration:-1,gravity:"bottom",position:"center",style:{background:"#E40520","font-weight":800}}).showToast();$.ajax({url:"https://bsclsaina01.bsc.es/club/api/results",type:"POST",data:t,processData:!1,contentType:!1,success:function(){$("#evaluation_form").parent().empty().append('<h1>Thanks for submitting!</h1><br><img src="./images/ok.png" alt="Evaluation sent successfully">'),a.hideToast(),console.log("Upload okay"),evaluationSent=!1},error:function(e){switch(console.error(e),e.status){case 400:let t=JSON.parse(e.responseText).evaluations_error.join(", ");toast=Toastify({text:t+" failed, please check the file names or their content",duration:8e3,stopOnFocus:!0,gravity:"bottom",position:"center",style:{background:"#E40520","font-weight":800}});break;default:toast=Toastify({text:"An unknown error happened, please contact the administrators.",duration:8e3,stopOnFocus:!0,gravity:"bottom",position:"center",style:{background:"#E40520","font-weight":800}})}toast.showToast(),a.hideToast(),$("#submit_button").attr("disabled",!0),evaluationSent=!1}})}FilePond.registerPlugin(FilePondPluginFileValidateType),FilePond.registerPlugin(FilePondPluginFileValidateSize),FilePond.create(document.getElementById("pond"),{allowMultiple:!0,storeAsFile:!0,dropOnPage:!0,maxFiles:8,maxTotalFileSize:"20MB",acceptedFileTypes:["application/json","text/plain"],credits:!1}),$(document).ready(function(){$("#submit_button").attr("disabled",!0);let e=!1;$("#email").blur(checkMail),$("input[type=text]").blur(checkText),$("input[type=url]").blur(checkLink),$("#actualPond").blur(checkFileInPond),$("#submit_button").on("pointerenter",function(){$("input[type=text]").each(checkText),$("input[type=url]").each(checkLink),$("input[type=email]").each(checkMail),$("#pond").each(checkFileInPond),$("#dataPol").each(checkChecked);let t=!$("input[type=text]").parent().hasClass("has-error"),a=!$("input[type=url]").parent().hasClass("has-error"),i=!$("input[type=email]").parent().hasClass("has-error"),l=!$("#pondDiv").hasClass("has-error"),n=$("#dataPol").is(":checked");!evaluationSent&&l&&t&&a&&i&&n?($("#submit_button").attr("disabled",!1),e||($("#submit_button").click(submitForm),e=!0)):$("#submit_button").attr("disabled",!0)})});