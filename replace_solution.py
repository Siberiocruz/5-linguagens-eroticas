import re

with open('teste/quiz-data.js', 'r') as f:
    content = f.read()

cta_html = """                <div class="solution-section" style="background: linear-gradient(135deg, #1a0a0a 0%, #2a1a0a 100%); border: 2px solid rgba(201,168,76,0.4); border-radius: 16px; padding: 32px 24px; text-align: center; margin-top: 32px;">
                    <p style="font-size: 0.75rem; font-weight: 800; letter-spacing: 3px; text-transform: uppercase; color: #e74c3c; margin-bottom: 12px;">🔥 O Próximo Nível</p>
                    <h3 style="font-family: Georgia, serif; font-size: 1.5rem; color: #fff; margin-bottom: 16px; line-height: 1.3;">O que está <em style="color: #c9a84c; font-style: italic;">travando</em> o seu corpo?</h3>
                    <p style="font-size: 1rem; color: #e8e0d0; margin-bottom: 16px; line-height: 1.6;">O mercado vende o orgasmo como um "botão mágico". Mas se fosse só técnica, você já teria resolvido.</p>
                    <p style="font-size: 1rem; color: #e8e0d0; margin-bottom: 24px; line-height: 1.6;">Seu corpo aprendeu a se proteger do prazer profundo. No e-book <strong>As 5 Linguagens Eróticas</strong>, eu revelo o mapa exato do seu bloqueio invisível — e como destravá-lo.</p>
                    <div style="display: flex; align-items: center; justify-content: center; gap: 12px; margin-bottom: 20px;">
                        <span style="text-decoration: line-through; color: #666; font-size: 0.9rem;">De R$ 97,00</span>
                        <span style="font-size: 2rem; font-weight: 900; color: #c9a84c;">R$ 29,99</span>
                    </div>
                    <a href="ebook/" target="_blank" style="display: inline-block; background: linear-gradient(135deg, #c9a84c, #e8c97a); color: #0d0d0d; font-weight: 800; font-size: 1.05rem; padding: 16px 36px; border-radius: 50px; text-decoration: none; box-shadow: 0 8px 32px rgba(201,168,76,0.35);">🔓 Quero o Mapa do Meu Prazer</a>
                </div>"""

# Substituir o bloco A (linhas 445-453)
content = re.sub(r'<div class="solution-section">.*?</div>', cta_html, content, flags=re.DOTALL)

with open('teste/quiz-data.js', 'w') as f:
    f.write(content)

print("Substituições concluídas!")
