const fs = require('fs');
// Import the uuid module
const { v4: uuidv4 } = require('uuid');

// Generate a UUID




// Generate a UUID

// Read the JSON file
fs.readFile('easy.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    try {
        const jsonData = JSON.parse(data); // Parse JSON data
        let i = 0;
        
        // Process the data
        jsonData.forEach(data_res => {
            let k = 1;
            const question_format = "CODING_PRACTICE";
            const question_key = i;
            i++;
            data_res["question_key"] = question_key;
            data_res["question_id"]=uuidv4();
            let tagNames = ["POOL_1", "TOPIC_DSA_CODING", "SUB_TOPIC_DS"];
            const question_tag = data_res["question_id"];
            tagNames.push(question_tag);
            const difficulty_level = "DIFFICULTY_" + data_res["difficulty"];
            tagNames.push(difficulty_level);
            const company = "COMPANY_NXTWAVE";
            tagNames.push(company);
            const source = "SOURCE_CCBP";
            tagNames.push(source);
            const exam = "IN_OFFLINE_EXAM";
            tagNames.push(exam);
            data_res["tag_names"] = tagNames;
            data_res["question_format"] = question_format;
            data_res["reamrks"] = "";
            data_res.input_output.forEach(function(inputGroup) {
                inputGroup.input.forEach(function(input) {
                    input.testcase_type = "";
                    input.t_id = k;
                    k++;
                });
            });
            data_res.code_metadata.forEach((test)=>{
                if(test["language"]==="PYTHON")
                {
                    test["language"]="PYTHON39";
                }
               if(test["language"]==="PYTHON39")
               {
                test["default_code"]=true;
               }
               else
               {
                test["default_code"]=false;
               }
            })
            data_res["average_time_spent"] = 0;
            data_res["order_no"] = 100;
            data_res["scores_updated"] = true; // changed to boolean
            data_res["scores_computed"] = 10;
            data_res["questions_asked_by_companies_info"] = [];
            data_res["cpp_python_time_factor"] = 0;
            data_res["solutions"] = [];
            data_res["hints"] = [];
            data_res["test_case_evaluation_metrics"] = [{
                "language": "C",
                "time_limit_to_execute_in_seconds": 2.01
              },
              {
                "language": "CPP",
                "time_limit_to_execute_in_seconds": 2.01
              },
              {
                "language": "PYTHON",
                "time_limit_to_execute_in_seconds": 10.01
              }];
              data_res["question_asked_by_companies_info"] = [];
        });
       
        // Write back the modified JSON data to the file
        fs.writeFile('easy.json', JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
            console.log('File updated successfully');
        });
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
});
