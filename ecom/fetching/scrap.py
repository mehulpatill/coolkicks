
          


## to scarp images from nike

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
# with open('assests/shoe_data.json', 'w') as file:
#     json.dump(shoe_data, file, indent=4)

# driver.quit()




## to remove background of fetched images

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
# api_key = "put removebg api key here"
# input_json = "shoe_data.json"
# output_dir = "shoe"
    
# if not os.path.exists(output_dir):
#     os.makedirs(output_dir)

# process_images_from_json(api_key, input_json, output_dir)






