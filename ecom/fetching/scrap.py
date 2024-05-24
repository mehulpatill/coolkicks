
          




# import json
# from selenium import webdriver
# from selenium.webdriver.common.by import By
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC
# import time

# url = 'https://www.nike.com/in/w/jordan-shoes-37eefzy7ok'
# driver_path = r"C:\Users\91876\Downloads\chromedriver-win64\chromedriver-win64\chromedriver.exe"
# driver = webdriver.Chrome(executable_path=driver_path)
# driver.get(url)

# # Wait for the page to load
# wait = WebDriverWait(driver, 10)
# wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '.product-card')))

# # Scroll down the page in a loop
# last_height = driver.execute_script("return document.body.scrollHeight")
# while True:
#     # Scroll to 80% of the page height
#     driver.execute_script("window.scrollTo(0, document.body.scrollHeight * 0.8)")
    
#     # Wait for 4 seconds to allow more shoes to load
#     time.sleep(4)
    
#     # Calculate the new page height
#     new_height = driver.execute_script("return document.body.scrollHeight")
    
#     # If the page height hasn't changed, it means all shoes have been loaded
#     if new_height == last_height:
#         break
    
#     last_height = new_height

# # Find all shoe elements
# shoes = driver.find_elements_by_css_selector('.product-card')

# # Create a list to store the shoe data
# shoe_data = []

# for shoe in shoes:
#     # Get the shoe name
#     name = shoe.find_element_by_css_selector('.product-card__title').text
    
#     # Get the shoe price
#     price = shoe.find_element_by_css_selector('.product-price').text
    
#     # Get the shoe image URL
#     image_url = shoe.find_element_by_css_selector('.product-card__hero-image').get_attribute('src')
    
#     # Store the data in a dictionary
#     shoe_info = {
#         "Name": name,
#         "Price": price,
#         "Image URL": image_url
#     }
    
#     # Add the shoe data to the list
#     shoe_data.append(shoe_info)

# # Save the shoe data to a JSON file
# with open('shoe_data.json', 'w') as file:
#     json.dump(shoe_data, file, indent=4)

# driver.quit()







# import json
# import os
# import requests

# def remove_background_with_api(api_key, image_url, name, output_dir):
#     url = 'https://api.remove.bg/v1.0/removebg'
#     headers = {'X-Api-Key': api_key}
#     data = {'image_url': image_url, 'size': 'auto'}

#     response = requests.post(url, data=data, headers=headers)

#     if response.status_code == requests.codes.ok:
#         output_filename = os.path.join(output_dir, f'{name}.png')
#         with open(output_filename, 'wb') as out:
#             out.write(response.content)
#         print(f"Background removed image saved as {output_filename}")
#     else:
#         print(f"Error processing image {name}: {response.status_code}, {response.text}")

# def process_images_from_json(api_key, input_json, output_dir):
#     with open(input_json, 'r') as file:
#         data = json.load(file)

#     for item in data:
#         name = item.get('Name')
#         image_url = item.get('Img')
#         if name and image_url:
#             remove_background_with_api(api_key, image_url, name, output_dir)

# # Example usage
# api_key = "SEUVirqeeavpX2FGFLBiA8h8"
# input_json = "shoe_data.json"
# output_dir = "shoe"
    
# if not os.path.exists(output_dir):
#     os.makedirs(output_dir)

# process_images_from_json(api_key, input_json, output_dir)








# import json

# # Load the JSON data
# with open('shoe_data.json') as json_file:
#     data = json.load(json_file)

# # Modify the Img value for the first 50 entries
# for item in data[:41]:
#     item['Img'] = f"shoe/{item['Name']}.png"

# # Write the modified data back to the file
# with open('modified_file.json', 'w') as json_file:
#     json.dump(data, json_file, indent=4)







# import json

# # Function to read JSON data from a file
# def read_json(file_path):
#     with open(file_path, 'r') as file:
#         data = json.load(file)
#     return data

# # Function to write JSON data to a file
# def write_json(data, file_path):
#     with open(file_path, 'w') as file:
#         json.dump(data, file, indent=4)

# # Read data from both JSON files
# one_data = read_json('shoe_data.json')
# two_data = read_json('modified_file.json')

# # Create a dictionary from two_data for quick lookup by name and age
# two_dict = {(entry['Name'], entry['Price']): entry for entry in two_data}

# # Combine the data
# combined_data = []
# for entry in one_data:
#     name_age_key = (entry['Name'], entry['Price'])
#     if name_age_key in two_dict:
#         # Merge entries
#         combined_entry = {**entry, **two_dict[name_age_key]}
#         combined_data.append(combined_entry)
#     else:
#         # If no matching entry in two_data, just add the entry from one_data
#         combined_data.append(entry)

# # Write the combined data to a new JSON file
# write_json(combined_data, 'combined_file.json')

# print("Data combined successfully into 'combined_file.json'")

from rembg import remove
from PIL import Image

# Function to remove the background
def remove_background(input_path, output_path):
    input_image = Image.open(input_path)
    output_image = remove(input_image)
    output_image.save(output_path)

# Example usage
input_path = "assests/download_image_1716454228418.png"  # Replace with your input image path
output_path = 'output.png'  # Save as PNG to keep the alpha channel
remove_background(input_path, output_path)
print(f"Background removed and saved to {output_path}")
